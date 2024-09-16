import Button from "@/components/button/Button";
import React from "react";

export const NavBar = () => {
  return (
    <section className="fixed w-full z-50">
      <main className="container mx-auto flex justify-between py-2 px-4">
        <div className="text-2xl font-bold">Lan Music</div>
        <div>
          <Button className={"primary-background text-white mr-2"}>
            Login
          </Button>
          <Button className={"bg-secondary-gradient text-white"}>
            Register
          </Button>
        </div>
      </main>
    </section>
  );
};
