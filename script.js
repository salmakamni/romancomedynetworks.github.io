var D3Network = window['vue-d3-network']
new Vue({
  el: '#app',
  components: {
    D3Network
  },
  data () {
    return {
      nodes: [
        { id: 1, name: 'Prologus'},
        { id: 2, name: 'Ergasilus'},
        { id: 3, name: 'Hegio'},
        { id: 4, name: 'Lorarii'},
        { id: 5, name: 'Philocrates'},
        { id: 6, name: 'Tyndarus'},
        { id: 7, name: 'Aristophontes'},
        { id: 8, name: 'Puer'},
        { id: 9, name: 'Philopolemus'},
        { id: 10, name: 'Stalagmus'},
        { id: 11, name: 'Grex'},
        { id: 12, name: 'Audience'}
      ],
      links: [
        //prologus
        { sid: 1, tid: 12},
        //ergasilus
        { sid: 2, tid: 12, _svgAttrs:{'stroke-width':8,opacity:1},},
        { sid: 2, tid: 3, _svgAttrs:{'stroke-width':4,opacity:1}},
        //hegio
        { sid: 3, tid: 4},
        { sid: 3, tid: 2, _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 3, tid: 5, _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 3, tid: 6, _svgAttrs:{'stroke-width':8,opacity:1}},
        { sid: 3, tid: 12, _svgAttrs:{'stroke-width':8,opacity:1}},
        { sid: 3, tid: 7},
        { sid: 3, tid: 9},
        { sid: 3, tid: 10},
        //lorarii
        { sid: 4, tid: 6 },
        { sid: 4, tid: 5 },
        { sid: 4, tid: 3 },
        //philocrates
        { sid: 5, tid: 6,  _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 5, tid: 4},
        { sid: 5, tid: 3,  _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 5, tid: 10},
        //tyndarus
        { sid: 6, tid: 5,  _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 6, tid: 4},
        { sid: 6, tid: 3,  _svgAttrs:{'stroke-width':4,opacity:1}},
        { sid: 6, tid: 12},
        //aristophonte
        { sid: 7, tid: 3 },
        { sid: 7, tid: 6 },
        //puer
        { sid: 8, tid: 12 },
        //philop
        { sid: 9, tid: 3 },
        //stalgamus
        { sid: 10, tid: 3 },
        { sid: 10, tid: 5 },
        //grex
        { sid: 11, tid: 12 }
      ],
      nodeSize:20,
      canvas:false

    }
  },
  computed:{
    options(){
      return{
        force: 3000,
        size:{ w:600, h:600},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels:true,
        canvas: this.canvas
      }
    }
  }
})