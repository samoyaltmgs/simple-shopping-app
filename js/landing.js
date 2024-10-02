$(document).ready(function() {
    // Initialize map
    var map = L.map('map').setView([43.7, -79.4], 19); // Centered around Toronto, initial zoom level

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10
    }).addTo(map);

    // Ajax call to fetch marker locations from JSON file
    $.ajax({
        url: 'json/landing.json',
        dataType: 'json',
        success: function(data) {
            // Loop through each location in JSON and add marker
            $.each(data.directions, function(index, location) {
                var marker = L.marker([location.lat, location.lng]).addTo(map);
                marker.bindTooltip(location.location, { permanent: true, direction: 'right' }).openTooltip();
            });

            // Fit map bounds to markers
            var bounds = new L.LatLngBounds();
            data.directions.forEach(function(location) {
                bounds.extend([location.lat, location.lng]);
            });
            map.fitBounds(bounds);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading JSON:', errorThrown);
        }
    });
});
