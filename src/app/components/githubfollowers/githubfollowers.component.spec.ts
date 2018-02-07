import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowersComponent } from './githubfollowers.component';

describe('GithubfollowersComponent', () => {
  let component: GithubFollowersComponent;
  let fixture: ComponentFixture<GithubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
