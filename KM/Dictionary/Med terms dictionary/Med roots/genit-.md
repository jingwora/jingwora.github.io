---
tags: [" #medroot"]
aliases: []
roots: [genit-]
forms: [combining]
alphabet:: G
definition: [bring forth, give birth]
---
>[!Note] DEFINITION of genit-
>bring forth, give birth (see also: [[gen-]])
_____
>[!info]+ ETYMOLOGY of genit-
>#latin gignere, genitus
_____
>[!example]+ RELATED TERMS to genit-
>
>| [[genit-]] | bring forth | give birth |
|:----------:|:-----------:|:----------:|
| [[para-]]  |      -      |    YES     |
| [[part-]]  |      -      | YES           |
_____
>[!tip]+ DERIVATIONS of genit-
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