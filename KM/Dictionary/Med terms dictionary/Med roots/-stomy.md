---
tags: [" #medroot"]
aliases: []
roots: [-stomy, stom-]
forms: []
alphabet:: S
definition: [Surgical procedure making an opening]
---
>[!Note] DEFINITION of -stomy
>[[stom-]][[-y]] - Surgical procedure making an opening
_____
>[!info]+ ETYMOLOGY of -stomy
>
_____
>[!example]+ RELATED TERMS to -stomy
>
_____
>[!tip]+ DERIVATIONS of -stomy
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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