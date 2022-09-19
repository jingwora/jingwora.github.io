---
tags: [" #medroot"]
aliases: [phot-]
roots: [phos-, phot-]
forms: [combining]
alphabet:: P
definition: [light, daylight]
---
>[!Note] DEFINITION of phos-
>light, daylight
_____
>[!info]+ ETYMOLOGY of phos-
>#greek phos, photos
_____
>[!example]+ RELATED TERMS to phos-
>
_____
>[!tip]+ DERIVATIONS of phos-
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