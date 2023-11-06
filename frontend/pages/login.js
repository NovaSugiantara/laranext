import Button from "@/components/organism/Button";
import Input from "@/components/organism/Input";
import Label from "@/components/organism/Label";
import { useAuth } from "@/hooks/auth";
import { MainLayout } from "@/layouts/MainLayout";
import React, { useState } from "react";
import Head from "next/head";
import Loading from "../components/organism/Loading";
import Errors from "@/components/Errors";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    //  Auth Hook
    const { login, isLoading, user } = useAuth({ middleware: "guest" });

    // check loading and user
    if (isLoading || user) {
        return (
            <div className="text-center">
                <Loading />
            </div>
        );
    }

    // Submit Form
    const submitForm = async (e) => {
        e.preventDefault();

        login({ email, password, setErrors });
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="w-1/2 mx-auto bg-slate-300 shadow p-5 rounded">
                {/* errors */}
                <Errors errors={errors} />

                {/* form here */}
                <h1 className="text-2xl font-bold text-center text-black mt-2 p-2">
                    Login
                </h1>
                <form
                    onSubmit={submitForm}
                    autoComplete="off"
                    className="space-y-4"
                >
                    <div className="mt-4">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className="mt-4">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            className="w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className="mt-4">
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;

Login.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
