"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useActionState } from 'react'
import loginAction from './action';

export default function Page() {
    const [state, action, pending] = useActionState(loginAction, null)
    return (
        <main className='space-y-11'>
            <section>
                <h3 className='text-lg font-bold text-slate-600'>Login</h3>
                <p className='text-slate-500 text-sm'>
                    Please log in to continue tracking your challenges.
                </p>
            </section>
            <section >
                <form className='space-y-4' action={action}>
                    {state?.status === "error" && <p className='text-red-600'>{state?.message}</p>}
                    <Input name="username" placeholder='Username' />
                    <Input name="password" type="password" placeholder='Password' />
                    <Button disabled={pending} type="submit" className="w-full cursor-pointer">Login</Button>
                    <p className='text-slate-500 text-center'>
                        {`Don't have an account?` + " "}
                        <Link href="/register" className='text-blue-800 underline'>Register</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}
