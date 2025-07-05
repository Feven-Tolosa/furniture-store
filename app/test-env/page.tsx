// app/test-env/page.tsx
export default function TestEnv() {
  return (
    <div className='p-4'>
      <h1>Environment Variables</h1>
      <pre>
        {JSON.stringify(
          {
            clerkPubKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.slice(
              0,
              10
            ),
            supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 10),
          },
          null,
          2
        )}
      </pre>
    </div>
  )
}
