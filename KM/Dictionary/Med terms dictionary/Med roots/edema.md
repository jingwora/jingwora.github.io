---
tags: [" #medroot"]
aliases: [edemat-]
roots: [edema, edemat-]
forms: [combining]
alphabet:: E
definition: [swelling]
---
>[!Note] DEFINITION of edema
>swelling (often due to fluid accumlation in tissue)
>*see also: [[hydrops]], [[dropsy]]*
_____
>[!info]+ ETYMOLOGY of edema
>#greek oidema, oidematos
_____
>[!example]+ RELATED TERMS to edema
>
>| [[edema]] | swelling |   -   |   -    |
|:---------:|:--------:|:-----:|:------:|
| [[-cel-]] |   YES    | tumor | hernia |
_____
>[!tip]+ DERIVATIONS of edema
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]