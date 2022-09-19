---
tags: [" #medroot"]
aliases: []
roots: [arteri-]
forms: [combining]
alphabet:: A
definition: [artery]
---
>[!Note] DEFINITION of arteri-
>artery
>*see also: [[angi-]] (blood vessel), [[ven-]] (vein)*
_____
>[!info]+ ETYMOLOGY of arteri-
>#greek arteria (air passage)
_____
>[!example]+ RELATED TERMS to arteri-
>
_____
>[!tip]+ DERIVATIONS of arteri-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]