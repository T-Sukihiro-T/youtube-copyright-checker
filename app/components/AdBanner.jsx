export default function AdBanner() {
  return (
    <div className="w-full flex justify-center mt-8 mb-4">
      <div className="shadow-lg rounded-lg overflow-hidden bg-transparent">
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            height: "100px",     
            minWidth: "700px",   
            maxWidth: "900px",   
          }}
          data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
          data-ad-slot="1234567892"
          data-ad-format="horizontal"
          data-full-width-responsive="false" 
        ></ins>
      </div>
    </div>
  );
}
