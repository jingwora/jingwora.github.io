---
tags: [" #medroot"]
aliases: []
roots: [ptyal-]
forms: [combining]
alphabet:: P
definition: [saliva]
---
>[!Note] DEFINITION of ptyal-
>saliva
>*see also: [[pty-]] (spit)*
_____
>[!info]+ ETYMOLOGY of ptyal-
>#greek ptyalon
_____
>[!example]+ RELATED TERMS to ptyal-
>
>| [[ptyal-]] | saliva |  -  |
|:----------:|:------:|:---:|
| [[sial-]]  |  YES   | salivary duct    |
_____
>[!tip]+ DERIVATIONS of ptyal-
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