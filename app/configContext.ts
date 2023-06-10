import type { TRANSACTION_MODE } from "@prisma/client";

export type Passbook_Settings_Keys =
  | "termDeposit"
  | "termMonths"
  | "deposit"
  | "totalDeposit"
  | "termWithdraw"
  | "withdraw"
  | "profitWithdraw"
  | "totalWithdraw"
  | "accountBalance"
  | "holding"
  | "monthsIn"
  | "monthsOut"
  | "invest"
  | "returns";

export type ConfigContext = {
  group: {
    [key in "alpha" | "bravo"]: { stateDate: Date; endDate?: Date };
  };
  passbook: {
    settings: {
      [key in TRANSACTION_MODE]?: {
        [key in
          | "FROM_USER"
          | "TO_USER"
          | "GROUP"
          | "FROM_USER_GROUP"
          | "TO_USER_GROUP"
          | "CLUB"]?: {
          [key in "ADD" | "SUB"]?: {
            [key in Passbook_Settings_Keys]?: "amount" | "month" | "balance";
          };
        };
      };
    };
  };
};

const configContext: ConfigContext = {
  group: {
    alpha: {
      stateDate: new Date("09/01/2020"),
      endDate: new Date("07/31/2023"),
    },
    bravo: {
      stateDate: new Date("08/01/2023"),
    },
  },
  passbook: {
    settings: {
      INTER_CASH_TRANSFER: {
        FROM_USER: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER: {
          ADD: {
            holding: "amount",
          },
        },
      },
      MEMBERS_PERIODIC_DEPOSIT: {
        FROM_USER: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        TO_USER: {
          ADD: {
            holding: "amount",
          },
        },
        GROUP: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
            monthsIn: "month",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            holding: "amount",
          },
        },
        CLUB: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
            holding: "amount",
          },
        },
      },
      NEW_MEMBER_PAST_TALLY: {
        FROM_USER: {
          ADD: {
            deposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        TO_USER: {
          ADD: {
            holding: "amount",
          },
        },
        GROUP: {
          ADD: {
            deposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          ADD: {
            deposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            holding: "amount",
          },
        },
        CLUB: {
          ADD: {
            deposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
            holding: "amount",
          },
        },
      },
      MEMBERS_WITHDRAW: {
        FROM_USER: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER: {
          SUB: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        GROUP: {
          SUB: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          ADD: {
            holding: "amount",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
            monthsIn: "month",
          },
        },
        CLUB: {
          SUB: {
            termDeposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
            holding: "amount",
          },
        },
      },
      VENDOR_PERIODIC_INVEST: {
        FROM_USER: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER: {
          ADD: {
            termDeposit: "amount",
            totalDeposit: "amount",
          },
          SUB: {
            accountBalance: "amount",
          },
        },
        GROUP: {
          ADD: {
            termWithdraw: "amount",
            totalWithdraw: "amount",
          },
          SUB: {
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            invest: "amount",
          },
          SUB: {
            accountBalance: "amount",
          },
        },
        CLUB: {
          ADD: {
            invest: "amount",
          },
          SUB: {
            holding: "amount",
          },
        },
      },
      VENDOR_INVEST: {
        FROM_USER: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER: {
          ADD: {
            deposit: "amount",
            totalDeposit: "amount",
            accountBalance: "amount",
          },
        },
        GROUP: {
          ADD: {
            withdraw: "amount",
            totalWithdraw: "amount",
          },
          SUB: {
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          SUB: {
            holding: "amount",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            invest: "amount",
          },
          SUB: {
            accountBalance: "amount",
          },
        },
        CLUB: {
          ADD: {
            invest: "amount",
          },
          SUB: {
            holding: "amount",
          },
        },
      },
      VENDOR_RETURN: {
        FROM_USER: {
          ADD: {
            termWithdraw: "amount",
            totalWithdraw: "amount",
            accountBalance: "amount",
          },
        },
        TO_USER: {
          ADD: {
            holding: "amount",
          },
        },
        GROUP: {
          ADD: {
            returns: "amount",
            accountBalance: "amount",
          },
        },
        FROM_USER_GROUP: {
          ADD: {
            returns: "amount",
            accountBalance: "amount",
          },
        },
        TO_USER_GROUP: {
          ADD: {
            holding: "amount",
          },
        },
        CLUB: {
          ADD: {
            returns: "amount",
          },
          SUB: {
            accountBalance: "balance",
            holding: "amount",
          },
        },
      },
    },
  },
};

export default configContext;
