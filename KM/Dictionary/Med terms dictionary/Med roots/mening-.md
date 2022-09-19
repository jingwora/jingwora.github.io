---
tags: [" #medroot"]
aliases: [-meninx]
roots: [mening-, -meninx]
forms: [combining]
alphabet:: M
definition: [meningeal membrane, meninges]
---
>[!Note] DEFINITION of mening-
>meningeal membrane, meninges
_____
>[!info]+ ETYMOLOGY of mening-
>#greek meninx, meningos
_____
>[!example]+ RELATED TERMS to mening-
>
_____
>[!tip]+ DERIVATIONS of mening-
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