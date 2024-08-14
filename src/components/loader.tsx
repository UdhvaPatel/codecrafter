export const Loader = () => {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '2.5rem', height: '2.5rem', position: 'relative', animation: 'spin 1s linear infinite' }}>
                <img src="/logo.png" alt="logo" />
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6c757d' }}>
                CodeCrafter is Thinking...
            </p>
        </div>

    )
}