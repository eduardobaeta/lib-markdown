import fetch from 'node-fetch';

async function validateUrls(arrayLinks) {
    try {
        const links = getArrayUrls(arrayLinks);
        const statusLinks = await getStatus(links);
        const results = arrayLinks.map((obj, index) => ({
            ...obj,
            status: statusLinks[index]
        }))

        return results;
    }
    catch (err) {
        throw new Error(err.message)
    }
}

function getArrayUrls(arrayLinks) {
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink).join())
}

async function getStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
            .all(arrayUrls
                .map((async url => {
                    const res = await fetch(url);
                    return res.status;
                })))

        return arrayStatus;
    }
    catch (err) {
        throw new Error(err.message)
    }
}

export default validateUrls;