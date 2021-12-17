console.log('===== Truthy =====')

if (true) console.log("Truthy true")

if ({}) console.log("Truthy {}")

if ([]) console.log("Truthy []")

if (42) console.log("Truthy 42 (Number)")

if ("foo") console.log("Truthy 'foo' (String)")

if (new Date()) console.log("Truthy new Date() (Instância)")

if (-42) console.log("Truthy -42 (Number)")

if (3.14) console.log("Truthy 3.14 (Number Float)")

if (-3.14) console.log("Truthy -3.14 (Number Float)")

if (Infinity) console.log("Truthy Infinity (Number)")

if (-Infinity) console.log("Truthy -Infinity (Number)")

console.log('===== Falsy =====')

if (!false) console.log("Falsy false")
if (!null) console.log("Falsy null")
if (!undefined) console.log("Falsy undefined")
if (!0) console.log("Falsy 0")
if (!NaN) console.log("Falsy NaN")
if (!'') console.log("Falsy ''")
