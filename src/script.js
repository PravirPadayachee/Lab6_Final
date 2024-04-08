
   (async function() {
        try {
            const carsResponse = await fetch('/api/getcar'); // Change the route to match your Azure Function
            if (!carsResponse.ok) {
                throw new Error('Network response was not ok');
            }
            const carsData = await carsResponse.json();
            console.log('Car Information:', carsData);
        } catch (error) {
            console.error('Error fetching car data:', error);
        }
    })();

