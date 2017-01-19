export const query: any = {
  'chart-type': 'bubbles',
  data: {
    reader: 'ddf1-csv-ext',
    splash: true,
    path: './ddf',
    ddfPath: './ddf'
  },
  locale: {
    id: 'en',
    filePath: './translation/'
  },
  state: {
    entities: {
      dim: 'geo',
      show: {
        'is--country': true
      }
    },
    entities_colorlegend: {
      opacityRegular: 0.8,
      opacityHighlightDim: 0.3,
      dim: 'world_4region'
    },
    entities_tags: {
      dim: 'tag'
    },
    time: {
      dim: 'time'
    },
    marker: {
      space: ['entities', 'time'],
      label: {
        use: 'property',
        which: 'name'
      },
      axis_y: {
        use: 'indicator',
        which: 'life_expectancy_years',
        zoomedMin: 19,
        zoomedMax: 86,
        domainMin: 0,
        domainMax: 100
      },
      axis_x: {
        use: 'indicator',
        scaleType: 'log',
        domainMax: 150000,
        domainMin: 300,
        zoomedMax: 150000,
        zoomedMin: 300,
        which: 'income_per_person_gdppercapita_ppp_inflation_adjusted'
      },
      size: {
        use: 'indicator',
        which: 'population_total',
        domainMin: 15,
        domainMax: 1400000000,
        scaleType: 'linear',
        allow: {
          scales: ['linear']
        }
      },
      color: {
        use: 'property',
        which: 'world_4region',
        syncModels: ['marker_colorlegend']
      }
    },
    marker_colorlegend: {
      space: ['entities_colorlegend'],
      label: {
        use: 'property',
        which: 'name'
      },
      hook_rank: {
        use: 'property',
        which: 'rank'
      },
      hook_geoshape: {
        use: 'property',
        which: 'shape_lores_svg'
      }
    },
    marker_tags: {
      space: ['entities_tags'],
      label: {
        use: 'property',
        which: 'name'
      },
      hook_parent: {
        use: 'property',
        which: 'parent'
      }
    }
  },
  ui: {
    datawarning: {
      doubtDomain: [1800, 1950, 2015],
      doubtRange: [1.0, 0.3, 0.2]
    },
    buttons: ['colors', 'find', 'size', 'trails', 'lock', 'moreoptions', 'fullscreen', 'presentation'],
    dialogs: {
      popup: ['colors', 'find', 'size', 'zoom', 'moreoptions'],
      sidebar: ['colors', 'find', 'size', 'zoom'],
      moreoptions: ['opacity', 'speed', 'axes', 'size', 'colors', 'label', 'zoom', 'presentation', 'about']
    }
  }
};
