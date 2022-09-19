---
tags: [" #medroot"]
aliases: [il(in)-, im(in)-, ir(in)-]
forms: [prefix]
roots: [in(in)-, il(in)-, im(in)-, ir(in)-]
alphabet:: I
definition: [in, into]
---
>[!Note] DEFINITION of in(in)-
>in, into
>Not to be confused with [[in(not)-]] or [[in(very)-]]
_____
>[!info]+ ETYMOLOGY of in(in)-
>#latin
>- il- before "l"
>- im- before "b, m, p"
>- ir- before "r"
_____
>[!example]+ RELATED TERMS to in(in)-
>
>| [[in(in)-]] | in  | into |  -  |
|:-----------:|:---:|:----:|:---:|
|   [[en-]]   | YES | YES  | within    |
_____
>[!tip]+ DERIVATIONS of in(in)-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]