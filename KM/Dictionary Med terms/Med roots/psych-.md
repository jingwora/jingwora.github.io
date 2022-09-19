---
tags: [" #medroot"]
aliases: []
roots: [psych-]
forms: [combining]
alphabet:: P
definition: [mind]
---
>[!Note] DEFINITION of psych-
>mind
_____
>[!info]+ ETYMOLOGY of psych-
>#greek psyche (soul)
_____
>[!example]+ RELATED TERMS to psych-
>
>| [[psych-]] | mind |               -                |
|:----------:|:----:|:------------------------------:|
|  [[no-]]   | YES  | mental activity, comprehension |
| [[phren-]] | YES  | diaphragrm                               |
_____
>[!tip]+ DERIVATIONS of psych-
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