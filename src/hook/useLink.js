import React, {useEffect} from 'react';

const UseLink = (url, rel) => {
    useEffect(() => {
        const Link = document.createElement("link")
        Link.href = url
        if (rel) {
            Link.rel = rel
        }

        document.body.appendChild(Link)
        console.log(Link)
        return () => {
            document.body.removeChild(Link)
        }
    }, [url, rel])
};

export default UseLink;