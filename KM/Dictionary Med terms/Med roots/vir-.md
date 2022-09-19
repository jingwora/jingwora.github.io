---
tags: [" #medroot"]
aliases: [virus-]
roots: [vir-, virus-]
forms: [combining]
alphabet:: V
definition: [virus]
---
>[!Note] DEFINITION of vir-
>virus
_____
>[!info]+ ETYMOLOGY of vir-
>#latin virus (poison, venom)
_____
>[!example]+ RELATED TERMS to vir-
>
_____
>[!tip]+ DERIVATIONS of vir-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
---
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]