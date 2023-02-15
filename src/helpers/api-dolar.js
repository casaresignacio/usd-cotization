
export const getUsdCot = async() => {

    const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

    try {
        const resp = await fetch( url );

        //check response
        if( resp.status === 200 ) {
            const  data = await resp.json();

            const coins = data.map( data => ({
                buy: data.casa.compra,
                sell: data.casa.venta,
                name: data.casa.nombre,
            }))

            // console.log(coins);
            //necesito las siguientes posiciones,0,1,3,4,6
            return coins;
        
        } else if ( resp.status === 404 ){
            console.log( 'Missing coin request' );
            return null;
        } else{
            console.log( 'We are having connection issues, please try later' ); 
            return null;
        }       
    } catch (error) {
        console.log( error );
        return null;
    }
    
}
