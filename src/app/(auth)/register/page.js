"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useActionState } from 'react'
import registerAction from './action'

export default function Page() {
    const [state, action, pending] = useActionState(registerAction, null)
    return (
        <main className='space-y-11'>
            <section>
                <h3 className='text-lg font-bold text-slate-600'>Register</h3>
                <p className='text-slate-500 text-sm'>
                    Create an account to start tracking your daily challenges
                </p>
            </section>
            <section >
                <form action={action} className='space-y-4'>
                    {state?.status === "error" && <p className='text-red-600'>{state?.message}</p>}
                    <Input name='username' placeholder='Username' />
                    <Input name='password' type="password" placeholder='Password' />
                    <Button type="submit" className="w-full cursor-pointer" disabled={pending}>Register</Button>
                    <p className='text-slate-500 text-center'>
                        {`Have an account?` + " "}
                        <Link href="/login" className='text-blue-800 underline'>Login</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}
