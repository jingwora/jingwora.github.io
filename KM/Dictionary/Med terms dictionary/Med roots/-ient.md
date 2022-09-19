---
tags: [" #medroot"]
aliases: []
roots: [-ient]
forms: [suffix, adjective, noun]
alphabet:: I
definition: ["'forms present participle'", person/thing that does something]
---
>[!Note] DEFINITION of -ient
>1. forms present-participle adjectives: add "-ing" to a verb to form an adjective
>2. forms nouns: person/thing that does something
_____
>[!info]+ ETYMOLOGY of -ient
>#latin
_____
>[!example]+ RELATED TERMS to -ient
>
| [[-ient]]  | pp  | person/thing that does something |
|:---------:|:---:|:--------------------------------:|
| [[-ant]]  | YES |               YES                |
| [[-ent]] | YES |               YES                |
_____
>[!tip]+ DERIVATIONS of -ient
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]