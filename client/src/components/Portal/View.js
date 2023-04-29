import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function View() {
    const location = useLocation();
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (location.pathname && location.pathname !== '/home' && location.state && location.state.data && location.state.data.URL) {
            const decodedUrl = decodeURIComponent(location.state.data.URL);
            const tempElement = document.createElement('div');
            tempElement.innerHTML = decodedUrl;
            const iframe = tempElement.querySelector('iframe');
            if (iframe) {
                const src = iframe.getAttribute('src');
                setUrl(src);
            } else {
                console.error('No iframe element found in decoded URL:', decodedUrl);
            }
        }
    }, [location.pathname, location.state]);

    const handleIframeLoad = () => {
        const player = document.getElementById('youtube-player');
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
    };

    return (

        <div className="">
            {/* <div className="container-fluid"> */}
                {/* <div className="row hidden-md-up"> */}
                    {/* <div className="col-md-6 mb-4"> */}
                        <div className="card">
                            <div className="card-block">
                                {url ? (
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            id="youtube-player"
                                            src={url}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            onLoad={handleIframeLoad}
                                            height="660"
                                            width="100%"
                                        />
                                    </div>
                                ) : (
                                    <div>No video URL found.</div>
                                )}
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default View;
