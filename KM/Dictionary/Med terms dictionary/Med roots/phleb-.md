---
tags: [" #medroot"]
aliases: []
roots: [phleb-]
forms: [combining]
alphabet:: P
definition: [vein]
---
>[!Note] DEFINITION of phleb-
>vein
_____
>[!info]+ ETYMOLOGY of phleb-
>##greek phleps, phlebos
_____
>[!example]+ RELATED TERMS to phleb-
>
>| [[phleb-]] | vein |
|:----------:|:----:|
|  [[ven-]]  | YES     |
_____
>[!tip]+ DERIVATIONS of phleb-
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