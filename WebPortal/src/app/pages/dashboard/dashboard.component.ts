import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Farm-Connect';
  dashBoardResp: any;
  config: any;
  selectedRow:number;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

this.dashBoardResp=[
  {
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },{
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },{
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },{
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },{
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },{
    'docName': 'SSc Document',
    'docNumber': '12344',
    'docDate': '12/12/2019',
    'docType': 'nayud',
    'altDocType': 'nayudu',
    'note': 'this is ssc Document',
    'price': '123',
   'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Inter Document',
    'docNumber': '232344',
    'docDate': '11/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Inter Document',
    'price': '2423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  },
  {
    'docName': 'Degreee Document',
    'docNumber': '52344',
    'docDate': '01/12/2019',
    'docType': 'nayudu',
    'altDocType': 'nayudu',
    'note': 'this is Degree Document',
    'price': '423',
    'files':[
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      },
      {
        'fileName': 'ssc doc',
        'fileFormat': 'txt'
      }
    ]
  }
]
this.config = {
  itemsPerPage: 10,
  currentPage: 1,
  totalItems: this.dashBoardResp.count
};
}

pageChanged(event){
  this.config.currentPage = event;
}
  changeMode(mode) {
    if (mode === 'list') {
      $('#products .item').addClass('list-group-item');
    } else if (mode === 'grid') {
      $('#products .item').removeClass('list-group-item');
      $('#products .item').addClass('grid-group-item');

    }
  }




}
