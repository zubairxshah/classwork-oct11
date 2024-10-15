import Image from "next/image";

export default function ImageTag() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row flex-wrap justify-center items-start gap-4 p-4">
                <div className="flex flex-col items-center">
                    <h1 className="mb-2">Rice Sacks</h1>
                    <div className="w-64 h-64 relative">
                        <Image
                            src="/images/01.jpg"
                            alt="Rice Sacks"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mb-2">Vegetables</h1>
                    <div className="w-64 h-64 relative">
                        <Image
                            src="/images/02.jpg"
                            alt="Vegetables"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mb-2">Legumes</h1>
                    <div className="w-64 h-64 relative">
                        <Image
                            src="/images/03.jpg"
                            alt="Legumes"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
