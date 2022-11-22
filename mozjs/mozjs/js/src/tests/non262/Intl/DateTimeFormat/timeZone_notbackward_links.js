// |reftest| skip-if(!this.hasOwnProperty("Intl"))

// Generated by make_intl_data.py. DO NOT EDIT.
// tzdata version = 2022f

const tzMapper = [
    x => x,
    x => x.toUpperCase(),
    x => x.toLowerCase(),
];

// Link names derived from IANA Time Zone Database, excluding backward file.
const links = {
    "GMT": "Etc/GMT",
};

for (let [linkName, target] of Object.entries(links)) {
    if (target === "Etc/UTC" || target === "Etc/GMT")
        target = "UTC";

    for (let map of tzMapper) {
        let dtf = new Intl.DateTimeFormat(undefined, {timeZone: map(linkName)});
        let resolvedTimeZone = dtf.resolvedOptions().timeZone;
        assertEq(resolvedTimeZone, target, `${linkName} -> ${target}`);
    }
}


if (typeof reportCompare === "function")
    reportCompare(0, 0, "ok");

