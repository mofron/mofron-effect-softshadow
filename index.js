/**
 * @file mofron-effect-textshadow/index.js
 * @brief text shadow effect modulw for mofron Text component
 * @license MIT
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) value parameter
     *                key-value: effect config
     * @param (mixed) color parameter
     * @short value,color
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("TextShadow");
            this.shortForm("value","color");
            this.transition("text-shadow");
            
            this.confmng().add("value", { type: "size", init: "0.1rem" });
            this.confmng().add("color", { type: "color", init: "#5a5a5a" });
            
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
            cmputl.rstyle(cmp, { "text-shadow" : "0 0 " + this.value() + " " + this.color() });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow size setter/getter
     * 
     * @param (string) shadow size (css value)
     * @return (string) shadow size
     * @type parameter
     */
    value (prm) {
        try {
            return this.confmng("value", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * shadow color setter/getter
     * 
     * @param (mixed (color)) string: shadow color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed) string: shadow color (css value)
     *                 null: not set yet
     * @type parameter
     */
    color (prm) {
        try {
            return this.confmng("color", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
