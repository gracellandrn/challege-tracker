import { Card, CardContent } from '@/components/ui/card'

export default function Layout({ children }) {
    return (
        <main className='flex flex-col justify-center items-center h-screen'>
            <section>
                <h2 className='text-2xl font-bold text-slate-600 mb-10'>
                    Challenge Tracker
                </h2>
            </section>
            <Card className="w-[420px]">
                <CardContent>

                    <section>
                        {children}
                    </section>
                </CardContent>
            </Card>
        </main>
    )
}
