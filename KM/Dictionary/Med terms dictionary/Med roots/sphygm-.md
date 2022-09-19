---
tags: [" #medroot"]
aliases: []
roots: [sphygm-]
forms: [combining]
alphabet:: S
definition: [pulse]
---
>[!Note] DEFINITION of sphygm-
>pulse
>*see also: [[rhythm-]]*
_____
>[!info]+ ETYMOLOGY of sphygm-
>#greek sphygmos
_____
>[!example]+ RELATED TERMS to sphygm-
>
_____
>[!tip]+ DERIVATIONS of sphygm-
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