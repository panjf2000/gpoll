// Copyright (c) 2023 The Gnet Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//go:build freebsd || dragonfly || netbsd || openbsd || darwin
// +build freebsd dragonfly netbsd openbsd darwin

package gnet

import "github.com/panjf2000/gnet/v2/internal/netpoll"

func (eng *engine) accept(fd int, ev netpoll.IOEvent, flags netpoll.IOFlags) error {
	return eng.accept1(fd, ev, flags)
}

func (el *eventloop) accept(fd int, ev netpoll.IOEvent, flags netpoll.IOFlags) error {
	return el.accept1(fd, ev, flags)
}

// The canonical BSD sockets implementation will inherit file status flags
// from the listening socket, so we don't need to set the non-blocking flag
// for the accepted sockets explicitly.
func setNonBlock(_ int, _ bool) error {
	return nil
}
