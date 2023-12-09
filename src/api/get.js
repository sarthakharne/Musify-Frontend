export async function getPlaylist(id) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(
          {
            title: 'get playlist request',
            id: {id}
          }
        ),
        headers: { 'Content-Type': 'application/json' },
      };
    // fetch('https://reqres.in/api/posts', requestOptions)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setPostId(data.id)
    // });

    var data = [{
        "type": "playlist",
        "name": "Test Playlist",
        "owner": {
            "type": "person",
            "Display Name": "Test Person",
            "followers": null,
            "image": null,
            "id": "_user1"
        },
        "description": "This is a test playlist",
        "tracks": {
            "items": [{
                "type": "track",
                "name": "Test Track 1",
                "artists": [
                    {
                        "type": "artist",
                        "name": "Test Artist 1",
                        "followers": null,
                        "url": null,
                        "image": null,
                        "id": "_artist1",
                    },
                    {
                        "type": "artist",
                        "name": "Test Artist 2",
                        "followers": null,
                        "url": null,
                        "image": null,
                        "id": "_artist2",
                    }
                ],
                "duration_ms": 60000,
                "category": 0,
                "url": "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
                "image": {
                    "type": "image",
                    "url": "https://picsum.photos/seed/musify_song1/200",
                    "height": 200,
                    "width": 200,
                    "id": "_track1_image"
                },
                "id": "_track1",
            },
            {
                "type": "track",
                "name": "Test Track 2",
                "artists": [
                    {
                        "type": "artist",
                        "name": "Test Artist 1",
                        "followers": null,
                        "url": null,
                        "image": null,
                        "id": "_artist1",
                    },
                    {
                        "type": "artist",
                        "name": "Test Artist 2",
                        "followers": null,
                        "url": null,
                        "image": null,
                        "id": "_artist2",
                    }
                ],
                "duration_ms": 60000,
                "category": 0,
                "url": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav",
                "image": {
                    "type": "image",
                    "url": "https://picsum.photos/seed/musify_song2/200",
                    "height": 200,
                    "width": 200,
                    "id": "_track2_image"
                },
                "id": "_track2",
            }],
            "total": 2
        },
        "image": {
            "type": "image",
            "url": "https://picsum.photos/seed/musify_playlist1/200",
            "height": 200,
            "width": 200,
            "id": "_playlist1_image"
        },
        "id": "_playlist1"
    },
    
    ]

    // var bgjson = {{data|tojson|safe}};
    // console.log(jQuery.type(bgjson));
    // console.log(JSON.parse(data));
    console.log("Here");

    return data
} 