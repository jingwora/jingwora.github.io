---
tags: [" #medroot"]
aliases: [il(not)-, im(not)-, ir(not)-]
forms: [prefix]
roots: [in(not)-, il(not)-, im(not)-, ir(not)-]
alphabet:: I
definition: [not]
---
>[!Note] DEFINITION of in(not)-
>not
>Not to be confused with [[in(in)-]] or [[in(very)-]]
_____
>[!info]+ ETYMOLOGY of in(not)-
>#latin
>- il- before "l"
>- im- before "b, m, p"
>- ir- before "r"
_____
>[!example]+ RELATED TERMS to in(not)-
>
>| [[in(not)-]] | not |              -              |
|:------------:|:---:|:---------------------------:|
|    [[a-]]    | YES | without, lacking, deficient |
|   [[non-]]   | YES | -                            |
_____
>[!tip]+ DERIVATIONS of in(not)-
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