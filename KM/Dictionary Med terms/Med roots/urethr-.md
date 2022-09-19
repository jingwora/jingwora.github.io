---
tags: [" #medroot"]
aliases: []
roots: [urethr-]
forms: [combining]
alphabet:: U
definition: [urethra]
---
>[!Note] DEFINITION of urethr-
>urethra
>*see also: [[ur-]] (urinary tract), [[ureter]] (ureter)*
_____
>[!info]+ ETYMOLOGY of urethr-
>#greek ourethra
_____
>[!example]+ RELATED TERMS to urethr-
>
_____
>[!tip]+ DERIVATIONS of urethr-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]