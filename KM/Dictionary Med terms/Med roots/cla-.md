---
tags: [" #medroot"]
aliases: [clas-, -clast]
roots: [cla-, clas-, -clast]
forms: [combining]
alphabet:: C
definition: [break (up), destroy]
---
>[!Note] DEFINITION of cla-
>break (up) destroy
_____
>[!info]+ ETYMOLOGY of cla-
>#greek klan
_____
>[!example]+ RELATED TERMS to cla-
>
>| [[cla-]] | destroy | break (up) |
|:--------:|:-------:|:----------:|
| [[ly-]]  |   YES   |    YES     |
_____
>[!tip]+ DERIVATIONS of cla-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]