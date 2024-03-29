export const getPortHash = (str: string): number =>
{
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++)
    {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return Number(Math.abs(hash).toString().slice(0, 4));
};
