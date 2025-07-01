import React from "react";

const HeroSection = () => {
    return (
        <section className="text-center py-20">
            <h1 className="text-3x1 font-stretch-50%">Nadpis, test, tady se to bude měnit.</h1>
            <p className="text-gold-300 mt-4">Tady se píše, o čem to je</p>
            <div className="flex justify-center gap-4 mt-6">
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    koukni na merch!
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                    kontaktuj mně!
                </button>
            </div>
        </section>
    ) 
}

export default HeroSection;