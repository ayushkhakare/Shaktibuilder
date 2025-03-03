import BuyNavbar from "./BuyNavbar";

function Buy() {
    return (
        <>
            <div>
                <BuyNavbar />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Buying Rules & Regulations</h1>
                    <p className="text-gray-700 mb-4">
                        Buying a property involves several legal and financial considerations. Some important regulations include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Verification of property ownership and legal documentation.</li>
                        <li>Understanding loan eligibility and mortgage terms.</li>
                        <li>Compliance with local zoning and building laws.</li>
                        <li>Tax implications, including stamp duty and registration fees.</li>
                        <li>Contract terms, including advance payments and transfer of ownership.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Builder & Developer Information</h2>
                    <p className="text-gray-700 mb-4">
                        Reliable builders ensure quality construction and transparent transactions. Key attributes of trustworthy developers include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Verified property approvals and clear legal status.</li>
                        <li>High-quality materials and adherence to safety standards.</li>
                        <li>Fair pricing and detailed documentation.</li>
                        <li>Commitment to timely project completion.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Buy;
