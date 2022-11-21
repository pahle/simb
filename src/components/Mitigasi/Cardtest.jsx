import React from "react";

const Cardtest = () => {
    return (
        <section>
            <div className="flex flex-column border rounded-md p-3 hover:bg-gradient-to-tl hover:from-gray-200 hover:to-white-500">
                <header>
                    <h2 className="text-lg font-semibold pb-2">Judul Card</h2>
                </header>
                <p className="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente pariatur ratione beatae minima officiis nobis asperiores dolorem eveniet praesentium incidunt aliquam, possimus nostrum. Minus, hic suscipit quisquam explicabo, vero blanditiis, magni magnam nesciunt voluptas fugit et atque enim. At iste id expedita provident exercitationem possimus debitis illo nisi? Corporis.</p>
                <footer className="text-slate-400 text-md">- Source <a href="bnpb.go.id" className="hover:text-sky-400 cursor-pointer italic">bnpb.go.id</a></footer>
            </div>
        </section>
    );
}

export default Cardtest;