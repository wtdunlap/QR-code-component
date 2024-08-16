function App() {
    return (
        <>
            <section className="container flex flex-row justify-center text-center items-center mx-auto size-5/6  py-40">
                <main className="qrCard flex flex-col bg-white rounded-2xl p-4 ">
                    <img
                        alt="Q R Code"
                        src="assets/image-qr-code.png"
                        className="qrImage rounded-xl "
                    />
                    
                    <h1 className="qrHeader text-2xl font-bold pl-1 pr-1 py-4 tracking-tighter ">
                        Improve your front-end skills by building projects
                    </h1>
                    <p className="qrBody text-slate-500 pl-2 pr-2 pb-5 font-medium">
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </main>
            </section>
        </>
    );
}

export default App;
