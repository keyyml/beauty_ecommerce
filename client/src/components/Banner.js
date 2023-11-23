import React from "react";

function Banner(){

    return(
        <div style={{ position: 'relative', width: '1000px', height: '400px' }}>
            <img
            src="https://i.ibb.co/D1yL79W/cosmetics-banner2.webp"
            alt="cosmetics-banner2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
            }}
            >
          <h1>Use Code BEAUTY503 for 15% off!</h1>
        </div>
      </div>
    )
}
export default Banner 