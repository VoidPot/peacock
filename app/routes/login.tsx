import { Form, Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="h-full w-full select-none bg-gradient-to-tr from-base-100 to-emerald-50">
      <div className="m-auto flex h-full w-full max-w-lg flex-col items-center justify-center gap-4 px-6 align-middle">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-brand text-4xl uppercase tracking-normal sm:text-5xl">
            Peacock Club
          </h1>
          <p className="font-core text-xs uppercase text-slate-700">
            Creating the environment for business
          </p>
        </div>

        <Form method="post" className="w-full">
          <input
            name="password"
            type={"password"}
            placeholder={"Enter the password"}
            className="input-bordered input w-full"
          />
          <div className="col-span-full mt-4 flex w-full flex-col justify-between gap-2 align-middle">
            <button type="submit" className="btn-primary btn-md btn px-6">
              Login
            </button>
            <Link to={"/home"} className="btn-outline btn-md btn px-6">
              Cancel
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
