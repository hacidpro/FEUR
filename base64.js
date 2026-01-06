// Fonction qui prend un texte en entrée et renvoie son encodage Base64
function encoderTexteEnBase64(texte) {
    // Gestion correcte des caractères accentués (UTF-8)
    const utf8Bytes = new TextEncoder().encode(texte);
    let b64 = "";
    const len = utf8Bytes.length;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    for (let i = 0; i < len; i += 3) {
        const a = utf8Bytes[i];
        const b = i + 1 < len ? utf8Bytes[i + 1] : 0;
        const c = i + 2 < len ? utf8Bytes[i + 2] : 0;

        const triple = (a << 16) + (b << 8) + c;

        b64 += alphabet.charAt((triple >> 18) & 0x3F);
        b64 += alphabet.charAt((triple >> 12) & 0x3F);
        b64 += i + 1 < len ? alphabet.charAt((triple >> 6) & 0x3F) : "=";
        b64 += i + 2 < len ? alphabet.charAt(triple & 0x3F) : "=";
    }

    return b64;
}

// Si tu veux l'utiliser dans un module ES6, décommente la ligne suivante :
// export { encoderTexteEnBase64 };


