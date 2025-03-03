import RentNavbar from "./RentNavbar";

function Rent() {
    return (
        <>
            <div>
                <RentNavbar />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Rental Rules & Regulations</h1>
                    <p className="text-gray-700 mb-4">
                        Renting a property involves following specific rules and regulations to ensure a smooth transaction between landlords and tenants. Some key regulations include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Security deposit agreements and refund policies.</li>
                        <li>Tenant rights and responsibilities as per the rental contract.</li>
                        <li>Maintenance responsibilities of both parties.</li>
                        <li>Legal requirements for rental agreements.</li>
                        <li>Eviction laws and tenant protection rights.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Builder & Developer Information</h2>
                    <p className="text-gray-700 mb-4">
                        Builders and developers play a crucial role in ensuring quality rental properties. Reliable builders provide:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Certified construction and legal property approvals.</li>
                        <li>High-quality infrastructure and safety standards.</li>
                        <li>Fair rental agreements and transparency in pricing.</li>
                        <li>Efficient property management services.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Rent;
