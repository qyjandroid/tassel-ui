/*
 * @Author: quanyj 
 * @Date: 2020-06-15 18:29:35 
 * @Last Modified by: quanyj
 * @Last Modified time: 2020-07-29 09:28:01
 */


/**
 *
 * 拼装className
 * @export
 * @param {...any} args
 * @returns
 */
export function classNames(this: any, ...args: any) {
    const classes = [];

    for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (arg) {
            const argType = typeof arg;

            if (argType === "string" || argType === "number") {
                classes.push((this && this[arg]) || arg);
            } else if (Array.isArray(arg)) {
                classes.push(classNames.apply(this, arg));
            } else if (argType === "object") {
                const hasOwn = {}.hasOwnProperty;

                Object.keys(arg).forEach((key) => {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push((this && this[key]) || key);
                    }
                });
            }
        }
    }

    return classes.join(" ");
}