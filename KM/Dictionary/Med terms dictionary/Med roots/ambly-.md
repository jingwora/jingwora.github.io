---
tags: [" #medroot"]
aliases: []
roots: [ambly-]
forms: [combining]
alphabet:: A
definition: [dull, faint]
---
>[!Note] DEFINITION of ambly-
>dull, faint
_____
>[!info]+ ETYMOLOGY of ambly-
>#greek amblys
_____
>[!example]+ RELATED TERMS to ambly-
>
>| [[ambly-]] | dull | faint |  -   |   -   |
|:----------:|:----:|:-----:|:----:|:-----:|
| [[bary-]]  | YES  |   -   | hard | heavy |
_____
>[!tip]+ DERIVATIONS of ambly-
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