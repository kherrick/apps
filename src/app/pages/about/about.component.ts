import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
        risus eu lacus laoreet, ut vulputate est fringilla. Phasellus pulvinar
        velit nisi, eget elementum ipsum cursus sed. Curabitur mi nulla,
        tincidunt in placerat ultricies, consectetur sed ante. Integer tempor in
        orci et gravida. Duis lacinia leo nec urna faucibus euismod. Integer non
        ligula a massa pulvinar porttitor et ac libero. Integer efficitur ante
        et molestie ornare. Nullam lobortis porta facilisis. Ut eleifend justo
        lectus, eu congue nisi semper faucibus. Aenean ultrices urna eu accumsan
        luctus. Ut suscipit tortor non urna tristique, eget suscipit lacus
        consequat. Vestibulum sit amet nulla accumsan, euismod orci ultrices,
        volutpat nunc. Nam aliquet nulla quis porta sollicitudin. Nulla
        ullamcorper lacinia velit faucibus vehicula. Proin eu felis eu nibh
        hendrerit vehicula.
      </article>

      <article>
        Suspendisse non malesuada risus, vitae tempor augue. Aenean ultricies ex
        vel hendrerit feugiat. Proin molestie, dui nec finibus pretium, libero
        risus laoreet est, et porta enim lectus a lacus. Ut venenatis mi in
        tempor lobortis. Sed ullamcorper non turpis at malesuada. Nullam vel
        nisi erat. Curabitur auctor urna ut mi consequat, vel hendrerit neque
        volutpat. Proin ullamcorper egestas arcu eget auctor. Suspendisse
        hendrerit imperdiet urna sit amet laoreet. Integer vulputate, justo ac
        blandit suscipit, enim arcu fermentum purus, at luctus turpis nulla eu
        ipsum. Maecenas non sagittis quam. Quisque eu enim vel nisi vulputate
        congue vitae quis erat. Nullam eu dui pharetra, iaculis nunc fermentum,
        blandit ex. Etiam in neque placerat, ullamcorper massa non, semper diam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </article>

      <article>
        Etiam at pharetra tortor, eu iaculis magna. Aliquam erat volutpat. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed blandit ac tortor eu cursus. Fusce euismod
        dictum sem. Aliquam semper ex nec efficitur maximus. Vivamus scelerisque
        lacus ex, eget feugiat dui sollicitudin scelerisque. Vivamus sit amet
        dui at elit tempus eleifend ut nec ipsum. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Suspendisse potenti. Sed tempor erat id laoreet posuere.
      </article>

      <article>
        Suspendisse lobortis massa eu purus congue bibendum. Pellentesque ac
        eros non lectus aliquam luctus non nec nisl. Vestibulum vel tincidunt
        metus. Aliquam dolor sem, sagittis nec blandit ac, vestibulum in leo.
        Morbi vestibulum sodales ultrices. Nunc dapibus hendrerit massa nec
        dapibus. Suspendisse potenti.
      </article>

      <article>
        Phasellus blandit condimentum nulla, at porttitor odio accumsan vel.
        Quisque ac felis vel dolor feugiat efficitur vel eget nunc. Ut nec metus
        elit. Proin tincidunt est ut magna congue, sit amet sodales quam
        egestas. Mauris auctor viverra arcu. Etiam eu ornare orci. Praesent eu
        velit quis quam porta aliquet at eget mi.
      </article>

      <article>
        Vivamus eu orci pharetra, congue justo et, consequat nibh. Morbi vitae
        maximus orci, ac dictum lectus. Praesent venenatis metus sed placerat
        semper. Praesent pellentesque nunc massa, vitae eleifend velit rutrum
        molestie. Curabitur id quam tempor mi vehicula imperdiet eu id urna.
        Morbi porta tincidunt ultrices. Proin laoreet justo quis erat
        scelerisque, sed dignissim elit viverra. Nulla eu egestas sapien, a
        commodo risus. Aenean ultricies nunc bibendum congue mollis. Suspendisse
        potenti. Curabitur in ex pretium, molestie libero at, ornare risus.
        Pellentesque varius ante eu tempus consectetur.
      </article>

      <article>
        Donec aliquet tortor tortor, eu feugiat leo fringilla ut. Duis tincidunt
        urna eget efficitur feugiat. Integer ultricies purus non odio lacinia
        pulvinar. Praesent malesuada eu mi nec porttitor. Curabitur ipsum diam,
        pharetra a libero a, efficitur dignissim lacus. Ut elementum leo in dui
        laoreet viverra. Aenean et dui vitae velit vulputate varius. Vivamus
        semper lorem vel dui egestas, dignissim interdum diam cursus. Nullam
        ullamcorper bibendum ipsum at ornare. Ut egestas rutrum felis
        pellentesque efficitur. Proin rhoncus odio nec libero euismod, vel
        aliquet tellus imperdiet. Integer venenatis felis quis ipsum pharetra,
        quis bibendum tortor luctus. Vestibulum dictum sapien quis molestie
        porta.
      </article>

      <article>
        Nulla suscipit sem sed lorem suscipit, id aliquet leo maximus. In a
        mauris interdum, dictum ante vitae, sodales ante. Phasellus vel aliquet
        metus. Sed ullamcorper neque ac libero venenatis lacinia. Cras in urna
        non risus hendrerit eleifend. Aenean ante arcu, vestibulum in vehicula
        vitae, ornare id tellus. Proin malesuada tempor pharetra. Morbi
        tincidunt mauris diam, euismod ornare tellus maximus sed. Nullam gravida
        mi id lorem molestie rhoncus. Fusce sit amet pellentesque ligula, vitae
        sollicitudin mi. Integer metus massa, sagittis non lorem non, aliquam
        sollicitudin ipsum.
      </article>

      <article>
        Nam placerat metus erat, id bibendum sem consequat rutrum. Cras rhoncus
        sem justo, a blandit est facilisis tincidunt. Integer blandit, ex sed
        dapibus facilisis, mi nibh efficitur quam, eget pellentesque neque lorem
        vitae ipsum. Vestibulum nec nisi at lorem vehicula condimentum. Integer
        ut nibh quis tellus dapibus vulputate. Vestibulum convallis ligula eu
        dignissim vehicula. Maecenas convallis velit eu purus condimentum
        eleifend. Integer volutpat a nunc quis gravida.
      </article>

      <article>
        Ut eu facilisis ante. Mauris convallis nisi nibh, vitae fermentum risus
        feugiat vel. Nulla sodales sollicitudin tellus vitae vestibulum. Aliquam
        volutpat fermentum lorem a tincidunt. Proin leo purus, faucibus nec
        risus eget, tempor congue orci. Aliquam ac mi ac justo dictum malesuada
        sed sit amet augue. Proin varius elit et arcu viverra faucibus. Nulla
        hendrerit, nulla sed lacinia cursus, augue sapien faucibus metus, non
        convallis lacus leo quis libero. Nullam suscipit id ante non lobortis.
        Morbi feugiat semper tortor vitae varius. Nulla lacinia egestas ipsum,
        quis malesuada libero dignissim vitae.
      </article>

      <article>
        Vivamus tincidunt enim et erat posuere, viverra posuere justo rutrum.
        Sed in lacinia sem. Etiam vel ligula fringilla, rhoncus enim id,
        efficitur tellus. Duis a porttitor lorem, sit amet dictum ante. Duis id
        dignissim massa. Mauris ornare turpis sed sem sollicitudin, at dictum
        libero ornare. Nunc bibendum tellus vitae nisi accumsan semper.
      </article>

      <article>
        Etiam luctus cursus libero, vel volutpat neque lacinia ac. Praesent ut
        leo eget eros cursus placerat. Vestibulum risus erat, luctus a cursus
        sed, fringilla vel turpis. Ut ut commodo erat. Etiam vitae interdum
        lacus, a convallis turpis. Quisque bibendum lectus eros. Morbi in felis
        quis mauris pellentesque porttitor vel eu nisl. Vestibulum nec purus ac
        nunc imperdiet congue in in lectus. Donec condimentum dolor at urna
        tristique, ac commodo tellus ultrices. Phasellus posuere et risus vitae
        sagittis. In elit nisl, rhoncus sit amet fringilla ut, feugiat vel orci.
        Curabitur lacinia ipsum nulla, non hendrerit tellus tincidunt sagittis.
        Aliquam iaculis molestie nisi sit amet tempor. Sed vitae tortor eget sem
        interdum sagittis.
      </article>

      <article>
        Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Sed ut metus nisl. Curabitur vitae ante in ante rutrum
        consectetur in a sem. Morbi bibendum leo quam, ut fringilla erat
        condimentum sed. Nullam sit amet mi rutrum, laoreet tellus non, egestas
        magna. Maecenas sagittis tristique dolor nec varius. Aliquam elementum
        lectus non lectus euismod tempor. Cras facilisis, justo sit amet
        placerat faucibus, orci purus sodales massa, in rutrum urna urna et
        tortor. Maecenas iaculis risus mauris, ut eleifend justo semper ac.
        Aenean semper quam quis rutrum accumsan. Nam consequat erat eget tortor
        vulputate, eu semper sapien fringilla. Vestibulum porttitor eros non
        lacus blandit, et cursus tellus varius. Quisque ac tristique velit.
        Mauris at metus elementum, pellentesque sapien eget, imperdiet nibh.
        Pellentesque placerat volutpat sem, in porttitor elit.
      </article>

      <article>
        Praesent tempor malesuada aliquam. Sed auctor lacus egestas nunc
        pulvinar eleifend. Donec euismod dolor quam, a porta ex pulvinar ut. Ut
        eu consequat enim. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Sed vel mi quis elit facilisis
        tempor quis id metus. Cras tincidunt magna lacinia nunc efficitur,
        sollicitudin eleifend ligula dapibus. Sed dapibus convallis metus, ac
        efficitur justo varius eget. Nam ac sapien id lorem hendrerit blandit a
        id neque. Ut molestie tempor metus mattis semper. Praesent vel odio a
        justo porta congue ac quis quam. Vivamus id ligula enim. Praesent
        eleifend nisi vitae vulputate rhoncus.
      </article>

      <article>
        Suspendisse nisi ex, laoreet at ex sit amet, tincidunt pharetra dolor.
        Sed mollis, ante ut accumsan condimentum, metus nisi venenatis turpis,
        quis mattis nibh diam sit amet massa. Duis euismod in tellus eget porta.
        Sed sapien tortor, gravida et posuere vitae, scelerisque non nulla.
        Donec vulputate, mauris dapibus viverra vulputate, eros felis fermentum
        orci, in placerat felis nisi vitae lorem. Aenean gravida augue at leo
        fermentum, et hendrerit enim dictum. Nunc metus enim, auctor eu porta
        et, rhoncus eu nisi. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Duis a sodales metus.
        Curabitur lacinia vehicula pharetra. Nulla facilisi. Curabitur pharetra
        ligula elementum accumsan fermentum. Praesent varius sodales magna, quis
        tincidunt augue tincidunt non. Nunc et scelerisque enim.
      </article>

      <article>
        Ut sit amet erat vitae purus imperdiet porttitor a eget arcu. Morbi
        pulvinar volutpat molestie. Sed consectetur sodales justo, ac feugiat
        orci. Fusce consectetur nibh eu sapien consectetur posuere. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Aenean nec laoreet sem. Nam
        aliquet quam leo, vel ultrices mauris efficitur vel. Maecenas ut porta
        leo. Maecenas pulvinar risus nec nulla semper imperdiet. Cras eget
        maximus sapien. Nullam dictum pulvinar elit sit amet posuere.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Duis ut ligula fringilla, feugiat sem a,
        elementum diam. Maecenas varius ipsum ut magna sollicitudin, id
        vestibulum turpis mollis. Vestibulum orci lorem, consectetur ut aliquam
        a, ornare varius augue. Morbi et eros bibendum, tincidunt turpis ut,
        pulvinar sem.
      </article>

      <article>
        Curabitur at congue orci, non eleifend libero. Sed eros risus, dignissim
        quis leo sit amet, blandit gravida eros. Phasellus facilisis mattis
        tortor, ac tincidunt enim varius quis. Duis pharetra lacus lacus, sed
        fringilla justo finibus eget. Praesent vitae nulla ut mauris faucibus
        gravida. Donec euismod volutpat nisi, ac accumsan metus cursus nec. Sed
        rutrum, nibh et laoreet aliquam, ex libero blandit tellus, vitae
        vulputate ipsum nulla finibus nisl. Donec dictum lobortis ante congue
        blandit. Quisque gravida dui dolor, ac lacinia augue commodo a. Quisque
        dapibus ante at felis euismod accumsan. Sed sagittis lacus a sagittis
        iaculis. Quisque in ante turpis. Suspendisse ultricies fermentum massa
        eget rutrum.
      </article>

      <article>
        Nullam condimentum tortor elit, eget ullamcorper quam tincidunt quis.
        Morbi viverra laoreet arcu, porttitor hendrerit elit scelerisque vitae.
        Aliquam erat volutpat. Nulla porttitor at odio vitae consequat. Mauris
        malesuada diam mauris, sed dapibus massa finibus in. In magna turpis,
        luctus a eleifend cursus, tempor in est. Sed sollicitudin ante id
        placerat tincidunt. Nunc diam velit, imperdiet congue congue nec,
        tincidunt et lectus. Aliquam ultricies, odio vitae mollis dignissim,
        orci magna tincidunt tellus, sodales ullamcorper dui est quis quam.
        Pellentesque quis mi enim. Integer at mi id dui molestie gravida. Morbi
        eget diam laoreet eros blandit consectetur et accumsan nisi.
      </article>

      <article>
        Donec quis consectetur elit. Nunc id felis eget sem convallis congue.
        Quisque a mi a mi congue accumsan tincidunt in purus. Nunc ornare justo
        a dui rutrum, non iaculis urna tincidunt. Curabitur maximus ultricies
        tortor, ut auctor lectus venenatis at. Donec orci ipsum, egestas laoreet
        leo nec, fermentum pharetra risus. Aliquam vel hendrerit purus. Maecenas
        purus turpis, accumsan ac malesuada sit amet, scelerisque id nisi.
        Aenean ut erat viverra, varius mi ut, tincidunt nunc. Pellentesque
        ullamcorper, orci sed tristique egestas, tellus ante interdum lacus,
        quis euismod diam dui sed ex. Proin ac odio hendrerit tortor malesuada
        ultrices eu sed diam. Aenean sagittis risus ac molestie condimentum.
        Fusce tempus ultricies congue. Nulla ultricies eu nunc eget tempor.
      </article>

      <article>
        Fusce nec malesuada elit. Nulla facilisi. Phasellus a massa metus. Nam
        lobortis, enim ut aliquam sollicitudin, mauris felis auctor neque, eu
        commodo ligula lectus nec felis. Suspendisse condimentum nisi tortor.
        Suspendisse consequat condimentum ipsum eget tincidunt. Nunc egestas
        tincidunt lacus, ut blandit felis efficitur in. In justo lectus, aliquam
        at tortor a, maximus molestie erat. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Sed
        tincidunt pretium urna congue ornare. Etiam placerat sodales elit, sed
        tristique neque placerat sed. Duis at ligula pulvinar, blandit felis ut,
        elementum justo. Aenean eget porta leo. Ut fringilla sagittis lorem vel
        lacinia. Phasellus id mauris ut enim sagittis egestas.
      </article>

      <article>
        Pellentesque ac egestas orci. Duis fermentum fermentum justo, mattis
        interdum tortor vehicula sed. Nunc eu egestas tortor. Nunc lobortis urna
        ipsum, in ornare magna molestie id. Suspendisse tortor lorem, luctus at
        ultricies ut, venenatis eu ipsum. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Ut volutpat purus
        quis quam hendrerit, non dapibus diam vestibulum. Mauris facilisis
        condimentum ante, eget pharetra velit dignissim ornare. Pellentesque non
        dui in libero facilisis condimentum dictum nec urna. Aenean pretium, est
        id fermentum dapibus, mauris purus semper purus, quis convallis justo
        dui tempor purus. Ut sed nisl ipsum. Curabitur quis dignissim nulla.
        Aliquam dignissim ultricies consequat.
      </article>

      <article>
        Sed rutrum id libero vel suscipit. Nulla suscipit quam a est faucibus,
        sit amet cursus quam condimentum. Quisque nibh nunc, dictum quis turpis
        ut, tristique gravida purus. Donec ullamcorper purus vitae commodo
        posuere. Sed sagittis vel enim a gravida. Etiam convallis tristique
        finibus. Nulla non elit leo. Proin nec est sed libero vestibulum posuere
        eget in elit. Nam non hendrerit neque, dictum porttitor sem. Sed commodo
        felis tellus, a maximus ipsum semper sed. In hac habitasse platea
        dictumst. Pellentesque laoreet metus vitae tempus maximus.
      </article>

      <article>
        Pellentesque porta tortor lacus, non sagittis leo interdum nec. Aliquam
        consequat maximus velit, placerat sodales urna feugiat sed. Nunc quis
        magna est. Etiam interdum, ex ut pretium consequat, nibh sapien viverra
        tortor, sed euismod lacus sem vitae dui. Mauris auctor bibendum semper.
        Vestibulum diam nibh, pretium vel imperdiet eget, auctor ac nisl. Sed
        vitae lacinia felis, vitae finibus mauris. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
      </article>

      <article>
        Sed eu sodales urna. Etiam malesuada nunc nec metus convallis, vitae
        imperdiet nibh tempus. Vivamus eget ipsum auctor nibh laoreet fringilla.
        Nunc risus diam, lobortis sed ipsum eu, efficitur dictum sapien.
        Phasellus gravida purus et tincidunt tempus. Donec ac vestibulum mi, et
        bibendum neque. In sit amet risus erat. Nam laoreet tempus aliquet.
        Curabitur porta vehicula tempus. Nam commodo libero quis turpis
        hendrerit, aliquet accumsan risus tempus. Nullam urna velit, lobortis a
        tellus sit amet, feugiat fringilla felis. Fusce dictum, urna posuere
        molestie gravida, diam lorem fermentum orci, et vehicula ex felis id
        ante.
      </article>

      <article>
        Sed facilisis hendrerit purus vitae elementum. Etiam pharetra quam eget
        leo consequat egestas. Etiam eu ante ac tortor mattis gravida sed et mi.
        Sed lacinia sodales mi, quis ultricies risus varius et. Etiam vulputate
        sem non nunc pulvinar, sed porttitor felis ullamcorper. Maecenas in ex
        ac nisl convallis sodales. Maecenas facilisis purus sed convallis
        fringilla. Suspendisse vitae eros a purus commodo porttitor. Phasellus
        vitae pulvinar elit, in mollis augue. Integer tincidunt, mi ut tincidunt
        posuere, orci diam aliquet ante, vitae porta leo sapien at erat.
      </article>

      <article>
        Nulla ut augue est. Curabitur luctus quam at velit porta, non aliquam
        ligula rutrum. Donec vestibulum, massa ac eleifend dignissim, lorem
        massa egestas eros, ac dictum risus risus eu neque. Curabitur mollis
        placerat nulla a tincidunt. Suspendisse vitae massa dui. Vivamus a lacus
        hendrerit, euismod ipsum eget, accumsan augue. Integer imperdiet mollis
        convallis. Aenean hendrerit eu nibh eget imperdiet. Curabitur erat est,
        ornare id pellentesque sed, eleifend ut justo. Etiam id ligula
        fringilla, dictum sapien vitae, interdum velit. Nunc in turpis vel velit
        dictum volutpat in in ex. Nunc viverra nec sem in molestie. Vestibulum
        consequat rhoncus molestie. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Ut vel efficitur libero.
      </article>

      <article>
        Suspendisse id sodales nisl, a commodo arcu. Nullam sit amet enim
        pretium, commodo mauris vel, malesuada erat. Vestibulum bibendum leo id
        odio consectetur vulputate. Mauris sollicitudin felis ut sem interdum,
        at vulputate purus aliquam. Etiam gravida euismod sodales. Cras neque
        lectus, commodo lacinia accumsan non, ornare non turpis. In sed gravida
        magna. Suspendisse finibus elit non semper auctor. Vivamus porta dictum
        mauris, ut molestie risus sagittis ut. Etiam commodo facilisis volutpat.
        Sed ut mi odio.
      </article>

      <article>
        Curabitur vitae turpis in leo ullamcorper congue. Donec finibus, sem sed
        tempus dictum, purus orci venenatis lectus, eget semper purus leo ac
        erat. Ut in diam consectetur elit dignissim placerat. Integer et magna
        ultrices, tempor mauris eget, consectetur massa. Cras porttitor pulvinar
        risus. Pellentesque mattis dictum eros sed ullamcorper. Fusce pulvinar,
        sapien non fermentum interdum, tellus justo dictum est, a malesuada
        lectus mi sit amet enim.
      </article>

      <article>
        Nulla cursus est purus, non hendrerit turpis malesuada luctus. Duis
        aliquet, ex nec tristique tempus, eros mauris fermentum enim, quis
        elementum magna dui in nisl. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas sit
        amet nisi eget libero maximus sagittis. Integer in accumsan lectus,
        bibendum finibus massa. Mauris molestie leo enim, non suscipit quam
        dignissim mattis. Vivamus porttitor enim ac odio placerat vehicula.
      </article>

      <article>
        Vestibulum iaculis felis hendrerit faucibus lacinia. Aliquam facilisis
        gravida ligula eu lobortis. Nunc laoreet vitae tellus ac aliquam.
        Suspendisse eget iaculis felis. Integer rutrum pellentesque posuere.
        Maecenas in orci non eros pretium volutpat in a arcu. Phasellus rhoncus
        tortor elit, vel sollicitudin nunc tincidunt vel. Proin dictum ut ligula
        a pulvinar. Praesent ac porta ex, ut efficitur ipsum. Sed imperdiet id
        est eu lobortis. Nam varius odio mauris, sed imperdiet neque
        pellentesque eu. Maecenas rhoncus, nunc sed luctus rutrum, risus augue
        fermentum tortor, sed mattis turpis massa a est.
      </article>

      <article>
        Morbi urna est, venenatis sit amet sodales varius, pharetra ac mi. Nulla
        a maximus quam. Etiam aliquet eu ipsum vel accumsan. In facilisis,
        libero vitae condimentum feugiat, sapien diam ullamcorper nibh, id
        lobortis odio mi in libero. Nulla porttitor, ligula et feugiat lobortis,
        est est dapibus felis, ut rutrum lectus lectus vitae ex. Sed imperdiet
        velit vitae ipsum hendrerit hendrerit. Nullam mattis diam et risus
        lacinia, id commodo neque blandit. Nulla facilisi. Phasellus pulvinar
        ultrices nulla, in lobortis nibh varius id. Vestibulum ac orci eget elit
        vulputate gravida nec tincidunt lectus. Aenean pulvinar quam a justo
        aliquam sagittis. Aliquam vitae nisl lacus. Praesent cursus malesuada
        accumsan. Vivamus dapibus nisl sed ipsum posuere sollicitudin. Integer
        rutrum quis sapien sed maximus.
      </article>

      <article>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Praesent eu luctus nibh. Aliquam
        ac posuere metus. Donec lectus velit, consequat at eleifend vel,
        tincidunt malesuada est. Morbi luctus urna eget euismod consectetur.
        Donec tristique tincidunt efficitur. Phasellus id leo egestas, porttitor
        purus ac, gravida magna. Nulla sollicitudin ac diam eu mattis. In vel
        urna neque.
      </article>

      <article>
        Praesent in nulla nulla. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam erat volutpat. Proin ultricies, leo sed
        congue scelerisque, nulla leo pellentesque dui, eget auctor massa urna
        sit amet nulla. Proin dictum magna eget tellus sollicitudin, ut
        ullamcorper est luctus. Nam iaculis eu turpis eu sodales. Vestibulum a
        metus fermentum, varius sapien nec, pellentesque mi. Vivamus ultrices
        eleifend quam non ultricies. Sed tempus augue non tellus aliquam
        fringilla. Vestibulum euismod molestie lacinia.
      </article>

      <article>
        Proin ac auctor urna. Fusce sit amet dolor libero. Morbi quis vulputate
        eros, ac blandit tortor. Duis laoreet mi est, eget dictum erat dignissim
        ac. Maecenas sodales vitae nunc vel placerat. Vivamus posuere in sapien
        at facilisis. Aliquam erat volutpat. Proin enim eros, convallis ut
        blandit in, tincidunt sed erat.
      </article>

      <article>
        Proin laoreet varius lobortis. Praesent tincidunt consectetur arcu, quis
        aliquet eros bibendum at. Proin ac odio erat. Cras fermentum arcu et ex
        ultricies gravida. Aliquam lorem velit, tincidunt eget elit eget, luctus
        aliquam ante. Phasellus commodo eros sit amet consequat facilisis. Fusce
        luctus non arcu sit amet ullamcorper. Nunc consequat eu lacus quis
        ornare. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Cras faucibus fringilla diam, id
        ultrices turpis egestas luctus. Nulla at metus dui. Suspendisse lorem
        urna, blandit malesuada tortor nec, porttitor interdum erat. Aliquam
        varius risus eget commodo facilisis. Suspendisse potenti. Praesent leo
        tellus, rhoncus eget sapien vel, cursus lobortis tellus. Donec ac lacus
        finibus, volutpat ex eget, tincidunt erat.
      </article>

      <article>
        Mauris non maximus arcu. Cras ligula velit, efficitur nec venenatis vel,
        laoreet sed ex. Etiam ornare a dui eu tincidunt. Phasellus eu metus vel
        augue sollicitudin sodales in quis sem. Nulla aliquam sit amet elit in
        venenatis. Praesent id est sed erat blandit imperdiet. Morbi quis risus
        auctor, pulvinar lorem fermentum, fringilla purus. Sed at porttitor mi,
        in tincidunt nulla. Duis tincidunt ante sed vehicula bibendum. Donec
        congue egestas orci sed aliquam.
      </article>

      <article>
        Aliquam eleifend eros eget erat aliquet, sed ultrices tellus interdum.
        Suspendisse vitae ornare dolor, eu mollis velit. Proin sit amet libero
        et quam molestie malesuada. In finibus felis massa, cursus molestie mi
        aliquam quis. Nulla ultrices elit sit amet tellus vehicula tempor. Duis
        ac libero nec orci scelerisque feugiat pulvinar in nisl. Nunc faucibus
        at ipsum nec tristique. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Morbi ullamcorper nisl quis
        dictum dapibus. In bibendum nunc ullamcorper scelerisque ultrices.
      </article>

      <article>
        Suspendisse tempor leo non urna ultricies, luctus blandit erat
        facilisis. Nam id volutpat eros. Nulla dignissim, enim dictum hendrerit
        blandit, purus nisi suscipit lacus, eu auctor tellus neque in dui.
        Aenean vitae sagittis justo, non congue augue. Aliquam eu lacus lacus.
        Nullam et magna ac ex dapibus iaculis ut vel leo. Aliquam lobortis
        ornare mauris vel eleifend. Maecenas sit amet erat dui. Vestibulum
        vestibulum tortor et felis placerat, sed ullamcorper ipsum hendrerit.
        Praesent feugiat velit ac dolor cursus, a hendrerit nisi consectetur.
      </article>

      <article>
        Duis tempor non felis nec placerat. Sed lacus dolor, ultricies et lorem
        vitae, maximus tincidunt leo. Sed gravida commodo mattis. Duis libero
        lacus, ultricies ac aliquam sed, rutrum nec tellus. Pellentesque a est
        vitae felis vulputate facilisis id sed justo. Mauris blandit mi eros, id
        finibus lacus dictum sit amet. Curabitur dignissim arcu et tortor
        molestie, at suscipit nisl volutpat. Fusce in ullamcorper massa. Ut ac
        purus dictum orci molestie viverra. Nam eros enim, pellentesque vel
        nulla sit amet, hendrerit auctor ipsum. Praesent aliquet lectus ut elit
        accumsan, in semper nunc venenatis.
      </article>

      <article>
        Mauris consequat laoreet feugiat. Nam non quam a magna faucibus
        suscipit. Sed et dolor at lorem placerat euismod. In convallis urna
        sagittis lorem ultrices ultricies. Praesent ex justo, malesuada eget
        viverra consequat, pellentesque et risus. Pellentesque tincidunt neque
        ut massa viverra, ac imperdiet risus placerat. Maecenas auctor enim
        dolor, vel aliquam leo ultricies ac. Pellentesque pulvinar faucibus
        tempor.
      </article>

      <article>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        dignissim, justo non dictum pharetra, risus odio egestas ex, eu bibendum
        sapien risus eu diam. Nullam quis velit id urna feugiat porta. Phasellus
        condimentum ac nibh malesuada fermentum. Duis gravida eget ante non
        rhoncus. Fusce imperdiet libero quis nisi placerat, ac vestibulum sem
        pellentesque. Fusce sed felis leo. Quisque pharetra vehicula mauris quis
        varius. Integer ante nibh, consequat sed maximus mollis, facilisis non
        sapien. Fusce tincidunt turpis nibh, et volutpat turpis ornare ut.
        Praesent dapibus malesuada mi, nec tincidunt ligula tincidunt vitae.
        Integer magna risus, convallis vitae fermentum vitae, sollicitudin eget
        nisi. Nullam sagittis urna eget sapien lacinia, sed cursus nibh
        dignissim.
      </article>

      <article>
        Aliquam ullamcorper auctor mauris ut gravida. Quisque at purus
        ullamcorper, luctus velit vitae, tempus ex. Nam condimentum eu justo non
        sollicitudin. Ut aliquet commodo nibh quis posuere. In sagittis
        condimentum odio at ultrices. Phasellus efficitur sapien in diam
        volutpat, eget eleifend dolor varius. Ut est dui, ullamcorper eget lacus
        a, ullamcorper commodo ligula. Nunc sed rhoncus justo, non efficitur
        purus.
      </article>

      <article>
        Vestibulum porttitor arcu eu augue sagittis, vel hendrerit turpis
        mattis. Maecenas pharetra fringilla neque, at accumsan felis fringilla
        eget. Aenean vel pellentesque arcu. Vivamus et dignissim turpis. Nam sit
        amet mi ac libero sagittis vehicula ut nec lorem. Morbi sem urna, tempor
        et purus eget, rhoncus facilisis nulla. Nunc elementum risus magna, a
        vestibulum neque semper nec. Nulla ultricies neque accumsan quam
        pulvinar sollicitudin. Integer a mauris tellus. Sed ligula leo,
        hendrerit eget est vitae, congue luctus lacus. Vivamus hendrerit, leo eu
        consequat mattis, risus nisl condimentum ante, et suscipit mi felis sit
        amet lectus. In fringilla rutrum eros, non consectetur velit porta sed.
      </article>

      <article>
        Aliquam sit amet risus commodo, pellentesque urna lobortis, placerat
        augue. Etiam varius turpis in est tempor, eu bibendum diam dictum.
        Nullam vitae pretium augue, et feugiat nunc. Praesent vel auctor tortor,
        eu tempus ligula. Nunc lacus nulla, auctor et pretium non, tincidunt at
        sapien. Ut a ligula vitae ex maximus dapibus. Curabitur convallis mi
        magna. Vivamus egestas ipsum vel bibendum aliquam. Nam sit amet magna
        lacinia, vehicula est bibendum, porttitor magna. Donec sem sapien,
        mollis sit amet commodo non, placerat et quam. In dapibus bibendum nibh,
        ut pellentesque metus aliquet ac. Maecenas cursus ultrices nisi sed
        vehicula. Etiam ullamcorper elit in mauris interdum, tincidunt tempus
        diam lacinia. Donec varius, augue a tincidunt gravida, elit leo
        pellentesque diam, et vehicula orci sem at nulla. In ac commodo augue.
      </article>

      <article>
        Sed porta cursus leo, ac feugiat eros varius faucibus. Vestibulum
        faucibus justo ante, vel laoreet dolor fermentum non. Pellentesque
        maximus urna in ipsum accumsan iaculis. Aliquam at maximus nunc. Nunc
        luctus non ligula porttitor vehicula. Pellentesque rhoncus turpis
        pharetra arcu vulputate imperdiet. Fusce sagittis mauris in lectus
        semper euismod. Duis dictum lacus a consectetur mollis. Maecenas mollis
        tempor odio, eget placerat tellus imperdiet eu. Morbi est est, vehicula
        eget felis vitae, vehicula laoreet neque. Suspendisse id urna ac risus
        lacinia porta. Proin consectetur magna vitae orci posuere commodo. Donec
        lobortis facilisis magna, vitae varius dui luctus ac. Vestibulum
        dignissim, massa sit amet iaculis sollicitudin, lacus turpis efficitur
        tellus, eu consequat justo velit et eros. Curabitur eleifend quis enim
        varius tempus.
      </article>

      <article>
        In felis justo, blandit in justo quis, pellentesque posuere enim. Cras
        tincidunt vel purus non faucibus. Nunc ipsum mi, pharetra at ligula at,
        efficitur tincidunt elit. Nam pharetra pellentesque est quis iaculis.
        Sed lobortis urna velit, vitae elementum dolor maximus a. Nulla pulvinar
        libero et mauris mollis, non mollis mauris tincidunt. Proin pretium
        sapien odio, vel sagittis sapien commodo et. Curabitur ac magna
        volutpat, bibendum lorem vitae, ullamcorper elit.
      </article>

      <article>
        Phasellus maximus convallis finibus. Duis pulvinar vulputate risus at
        condimentum. Phasellus facilisis vehicula semper. In consectetur
        interdum condimentum. Aliquam mattis orci a metus condimentum venenatis.
        Nullam ut convallis erat, in pretium urna. Quisque pulvinar velit
        ligula, sed auctor diam posuere vitae. Quisque egestas neque sit amet
        nisl auctor, at ullamcorper sem efficitur. Sed ut consequat elit, ut
        eleifend leo.
      </article>

      <article>
        Sed molestie, tellus in mollis viverra, odio nisl luctus purus,
        tincidunt accumsan ligula mi rhoncus erat. Fusce sed rhoncus lorem, at
        dapibus justo. Maecenas at arcu elementum, pulvinar lacus in, posuere
        sapien. Sed placerat, ligula at feugiat lacinia, urna felis feugiat
        enim, eget feugiat est massa ut nisl. Curabitur bibendum dolor eget
        semper elementum. Quisque vestibulum lorem eros, id mollis arcu mollis
        sit amet. Aliquam justo mauris, sodales non eros vitae, consequat varius
        dolor. Maecenas quis varius velit. Fusce sed sollicitudin dolor. Integer
        ipsum orci, condimentum eget suscipit quis, malesuada ac lorem. Aliquam
        pulvinar nisi nulla, id venenatis urna pretium vel. Sed in sapien at
        nisl ullamcorper lacinia. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas.
      </article>

      <article>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aliquam vel condimentum nisi. Curabitur lobortis nunc
        quis tortor pellentesque congue. Phasellus laoreet luctus pellentesque.
        Nullam faucibus, mauris id laoreet varius, risus justo iaculis tortor,
        ac sodales neque enim eget tellus. Morbi sed eros quis leo tincidunt
        aliquam. Maecenas semper ut ante vel ornare. Donec ac pretium sem.
      </article>

      <article>
        Nam auctor, ante in varius luctus, augue odio rutrum leo, non
        pellentesque tortor quam nec dolor. Aliquam erat volutpat. Nullam nec
        ornare mi, nec venenatis nulla. Morbi nec tellus quis ligula finibus
        sodales in ac nisi. Nunc porttitor felis tortor, eu rhoncus mauris
        maximus vel. Aenean vel erat id nisl aliquet aliquam dictum vitae eros.
        Nunc elementum dapibus feugiat. Proin iaculis vestibulum lobortis. Morbi
        mattis feugiat purus vel porttitor. Etiam ut tortor ut ante eleifend
        aliquet ac eu diam. Phasellus nec massa tempus tellus posuere tempus nec
        dignissim nunc. Praesent id lorem nunc. Sed ultricies non risus in
        tincidunt. Nam nibh tellus, ornare non vehicula in, placerat vel purus.
      </article>
    </ng-container>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AboutComponent {}
