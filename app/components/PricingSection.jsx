export default function PricingTable() {
  return (
    <section className=" px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

     
        <PricingSection title="Residential / Domestic Installations">
          <PriceCard title="Dwelling Installation ≤ 10m" desc="Fixed standard install" price="£275" />
          <PriceCard title="Dwelling Installation ≥ 10m" desc="Per additional metre" price="£22.50 / metre" />
          <PriceCard title="Wall Penetration" desc="Standard masonry" price="Included" />
          <PriceCard title="Loft / Underfloor Routing" desc="Depending on access" price="£45 – £85" />
          <PriceCard title="Surface Trunking" desc="Per metre" price="£12.50" />
          <PriceCard title="EV Ready Socket Only" price="£145" />
        </PricingSection>

        
        <PricingSection title="Commercial Installations">
          <PriceCard title="1-Phase ≤ 10m" desc="Commercial install" price="£265" />
          <PriceCard title="3-Phase ≤ 10m" desc="Commercial install" price="£525" />
          <PriceCard title="3-Phase ≥ 10m" desc="Per additional metre" price="£42 / metre" />
          <PriceCard title="External Trenching / Groundworks" price="£85 / metre" />
          <PriceCard title="Load Management / CT Clamps" price="£75" />
          <PriceCard title="Multi-Charger Setup" desc="Per charger" price="£45" />
          <PriceCard title="Emergency Stop Button" price="£55 – £95" />
        </PricingSection>

        
        <PricingSection title="Optional Add-Ons">
          <PriceCard title="Wi-Fi Extender / Mesh" price="£45 – £65" />
          <PriceCard title="AmpLink Elite X Colour Customisation" price="£35" />
          <PriceCard title="Backplate / Stand / Pedestal" price="£95 – £245" />
          <PriceCard title="Extended Warranty (3 Years)" price="£65" />
          <PriceCard title="Remote Monitoring Setup" price="£35" />
        </PricingSection>
        
        
        <PricingSection title="Special Conditions">
          <PriceCard title="Limited Access Areas" price="TBA" />
          <PriceCard title="Listed / Conservation Buildings" price="TBA" />
          <PriceCard title="Complex Meter Separation (HMO / Flats)" price="TBA" />
          <PriceCard title="Shared Car Parks / Steel Frames" price="TBA" />
        </PricingSection>

      </div>
    </section>
  );
}



function PricingSection({ title, children }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-white border-l-4 border-red-600 pl-4 mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function PriceCard({ title, desc, price }) {
  return (
    <div className="relative bg-black border border-white/10 rounded-2xl p-6 shadow-lg transition hover:border-red-600">
      
      
      <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 to-transparent rounded-t-2xl" />

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      {desc && (
        <p className="text-sm text-white/70 mt-2">
          {desc}
        </p>
      )}

      <div className="mt-6 text-2xl font-bold text-red-500">
        {price}
      </div>
    </div>
  );
}
