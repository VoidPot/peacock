import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTransactionData = async () => {
  const transactions = await prisma.transaction.findMany({
    include: {
      group: true,
      from: true,
      to: true,
    },
  });

  const initial = {
    in: 0,
    out: 0,
    transfer: 0,
    hold: 0,
    month: 0,
    rMonth: 0,
  };

  const data: any = {
    all: { ...initial },
    member: { ...initial },
    vendor: { ...initial },
    group: { ...initial },
  };

  transactions.forEach((each) => {
    const from = each.from;
    const to = each.to;
    const group = each?.group;
    const groupId = group ? group?.id : 0;

    if (each.from.type === "MEMBER") {
      if (!data[`member_${from.id}_${groupId}`]) {
        data[`member_${from.id}_${groupId}`] = { ...initial };
      }
    }
    if (each.to.type === "MEMBER") {
      if (!data[`member_${to.id}_${groupId}`]) {
        data[`member_${to.id}_${groupId}`] = { ...initial };
      }
    }

    if (each.from.type === "VENDOR") {
      if (!data[`vendor_${from.id}`]) {
        data[`vendor_${from.id}`] = { ...initial };
      }
    }
    if (each.to.type === "VENDOR") {
      if (!data[`vendor_${to.id}`]) {
        data[`vendor_${to.id}`] = { ...initial };
      }
    }

    if (group?.id) {
      if (!data[`group_${group.id}`]) {
        data[`group_${group.id}`] = { ...initial };
      }
    }

    if (each.mode === "INTER_CASH_TRANSFER") {
      data[`member_${to.id}_${groupId}`].hold += each.amount;
      data[`member_${from.id}_${groupId}`].hold -= each.amount;

      data[`member_${to.id}_${groupId}`].transfer += each.amount;
      data[`member_${from.id}_${groupId}`].transfer -= each.amount;

      data["all"].transfer += each.amount;

      if (group?.id) {
        data[`group_${group.id}`].transfer += each.amount;

        data[`group`].transfer += each.amount;
      }
    }

    if (each.mode === "MEMBERS_PERIODIC_DEPOSIT") {
      data[`member_${from.id}_${groupId}`].in += each.amount;
      data[`member_${to.id}_${groupId}`].hold += each.amount;
      data[`member_${from.id}_${groupId}`].month += 1;

      data["all"].in += each.amount;
      data["all"].hold += each.amount;
      data["member"].in += each.amount;
      data["member"].hold += each.amount;

      if (group?.id) {
        data[`group_${group.id}`].in += each.amount;
        data[`group_${group.id}`].hold += each.amount;

        data[`group`].in += each.amount;
        data[`group`].hold += each.amount;
      }
    }

    if (each.mode === "MEMBERS_WITHDRAW") {
      data[`member_${from.id}_${groupId}`].hold -= each.amount;
      data[`member_${to.id}_${groupId}`].out += each.amount;

      data["all"].out += each.amount;
      data["all"].hold -= each.amount;
      data["member"].out += each.amount;
      data["member"].hold -= each.amount;

      if (group?.id) {
        data[`group_${group.id}`].out += each.amount;
        data[`group_${group.id}`].hold -= each.amount;

        data[`group`].out += each.amount;
        data[`group`].hold -= each.amount;
      }
    }

    if (each.mode === "NEW_MEMBER_PAST_TALLY") {
      data[`member_${from.id}_${groupId}`].in += each.amount;
      data[`member_${to.id}_${groupId}`].hold += each.amount;

      data["all"].in += each.amount;
      data["all"].hold += each.amount;
      data["member"].in += each.amount;
      data["member"].hold += each.amount;

      if (group?.id) {
        data[`group_${group.id}`].in += each.amount;
        data[`group_${group.id}`].hold += each.amount;

        data[`group`].in += each.amount;
        data[`group`].hold += each.amount;
      }
    }

    if (each.mode === "VENDOR_PERIODIC_INVEST") {
      data[`member_${from.id}_${groupId}`].hold -= each.amount;
      data[`vendor_${to.id}`].out += each.amount;
      data[`vendor_${to.id}`].month += 1;

      data["all"].out += each.amount;
      data["all"].hold -= each.amount;
      data["vendor"].out += each.amount;
      data["member"].hold -= each.amount;

      if (group?.id) {
        data[`group_${group.id}`].out += each.amount;
        data[`group_${group.id}`].hold -= each.amount;

        data[`group`].out += each.amount;
        data[`group`].hold -= each.amount;
      }
    }

    if (each.mode === "VENDOR_INVEST") {
      data[`member_${from.id}_${groupId}`].hold -= each.amount;
      data[`vendor_${to.id}`].out += each.amount;

      data["all"].out += each.amount;
      data["all"].hold -= each.amount;
      data["vendor"].out += each.amount;
      data["member"].hold -= each.amount;

      if (group?.id) {
        data[`group_${group.id}`].out += each.amount;
        data[`group_${group.id}`].hold -= each.amount;

        data[`group`].out += each.amount;
        data[`group`].hold -= each.amount;
      }
    }

    if (each.mode === "VENDOR_PERIODIC_RETURN") {
      data[`vendor_${from.id}`].in += each.amount;
      data[`member_${to.id}_${groupId}`].hold += each.amount;
      data[`vendor_${from.id}`].rMonth += 1;

      data["all"].in += each.amount;
      data["all"].hold += each.amount;
      data["vendor"].in += each.amount;
      data["member"].hold += each.amount;

      if (group?.id) {
        data[`group_${group.id}`].in += each.amount;
        data[`group_${group.id}`].hold += each.amount;

        data[`group`].in += each.amount;
        data[`group`].hold += each.amount;
      }
    }

    if (each.mode === "VENDOR_RETURN") {
      data[`vendor_${from.id}`].in += each.amount;
      data[`member_${to.id}_${groupId}`].hold += each.amount;

      data["all"].in += each.amount;
      data["all"].hold += each.amount;
      data["vendor"].in += each.amount;
      data["member"].hold += each.amount;

      if (group?.id) {
        data[`group_${group.id}`].in += each.amount;
        data[`group_${group.id}`].hold += each.amount;

        data[`group`].in += each.amount;
        data[`group`].hold += each.amount;
      }
    }

    if (each.mode === "OTHER_EXPENDITURE") {
      data[`member_${from.id}_${groupId}`].hold -= each.amount;
      data[`vendor_${to.id}`].out += each.amount;

      data["all"].out += each.amount;
      data["all"].hold -= each.amount;
      data["vendor"].out += each.amount;
      data["member"].hold -= each.amount;

      if (group?.id) {
        data[`group_${group.id}`].out += each.amount;
        data[`group_${group.id}`].hold -= each.amount;

        data[`group`].out += each.amount;
        data[`group`].hold -= each.amount;
      }
    }
  });

  return data;
};

const generateSummary = async () => {
  const transactionData = await getTransactionData();

  const createData = Object.entries(transactionData)
    .map(([key, value]: any) => {
      return [
        key,
        {
          deposit: value.in,
          withdraw: value.out,
          transfer: value.transfer,
          holding: value.hold,
          payload: {
            investMonth: value.month,
            returnMonth: value.rMonth,
          },
        },
      ];
    })
    .map(([key, value]) => {
      const keys = key.split("_");
      const itemData = { ...value };

      if (keys.length == 1) {
        if (key === "member") {
          itemData.type = "ALL_MEMBER";
        }
        if (key === "group") {
          itemData.type = "ALL_GROUP";
        }
        if (key === "vendor") {
          itemData.type = "ALL_VENDOR";
        }
        if (key === "all") {
          itemData.type = "DEFAULT";
        }
      } else {
        if (keys[0] === "member") {
          itemData.type = "MEMBER";
          itemData.userId = Number(keys[1]);

          if (keys[2] !== 0) {
            itemData.groupId = Number(keys[2]);
          }
        }
        if (keys[0] === "group") {
          itemData.type = "GROUP";
          itemData.groupId = Number(keys[1]);
        }
        if (keys[0] === "vendor") {
          itemData.type = "VENDOR";
          itemData.userId = Number(keys[1]);
        }
      }

      return itemData;
    });

  const summary = await prisma.summary.createMany({
    data: createData,
    skipDuplicates: true,
  });

  return summary;
};

export default generateSummary;
